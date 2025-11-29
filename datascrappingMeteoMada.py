import requests
from bs4 import BeautifulSoup
import re

# === CONFIG ===
URL = "https://www.meteomadagascar.mg/prevision/previsions-marines-3/"
JS_FILE_PATH = "./assets/js/script.js"
#JS_FILE_PATH = "./assets/js/script.js"
IMAGE_COTIERE = "Image_marine_cotiere_SITEWEB-MHJ.png"
IMAGE_HAUTE_MER = "Image_marine_haute_mer_SITEWEB.png"

def get_clean_text(p):
    text = p.get_text(separator=' ').strip()
    text = text.replace('\xa0', ' ').replace('  ', ' ')
    return text

def insert_line_breaks(text):
    text = re.sub(r'(?<!\d)\.(?!\d)', '.\\n', text)
    return text.strip()

" Mila ovaina fa niova ny MeteoMada
def extract_marine_messages():
    res = requests.get(URL)
    soup = BeautifulSoup(res.content, "html.parser")
    # Ty ilay situation general
    situation_block = ""

    for h3 in soup.find_all("h3", class_="h3-custom"):
        if h3.text.strip().upper() == "SITUATION GENERALE":
            next_div = h3.find_next_sibling("div", class_="cnt-rte")
            if next_div:
                # lasa paraph fa ts liste intsony
                text = next_div.get_text(separator="\n", strip=True)
                situation_block = text.replace(". ", ".\n")
            break


    cotiere_section = soup.find("div", id=lambda x: x and x.startswith("tab-desc-0-"))
    cotiere_title = get_clean_text(cotiere_section.find("h2")) if cotiere_section else ""

    paragraphs = cotiere_section.find_all("p") if cotiere_section else []
    # Lasa teny gasy, verifieo aloh hoe ilay Cap Ste Andre ve vilanandro? krkr
    target = "TANJONA VILANANDRO HATRANY ANALALAVA"
    cap_msg = ""

    for i, p in enumerate(paragraphs):
        strong = p.find("strong")
        if strong and target in strong.get_text(strip=True).upper():
        
            if i + 1 < len(paragraphs):
                cap_msg = get_clean_text(paragraphs[i + 1])
            break

    cotiere_msg = (
        f"**Bulletin marine cotière**\n\n"
        f"{insert_line_breaks(cotiere_title)}\n\n"
        f"**{target}**\n"
        f"{insert_line_breaks(cap_msg)}"
    )
    # ty ny haute mer, en francais fona aloh le iz fa niov structure koa
    haute_section = soup.find("div", id=lambda x: x and x.startswith("tab-desc-1-"))
    haute_title = get_clean_text(haute_section.find("h2")) if haute_section else ""

    h_paragraphs = haute_section.find_all("p") if haute_section else []

    moz_msg = ""
    found_canal = False

    for p in h_paragraphs:
        text = p.get_text(strip=True).upper()

        # Raiso hatreo amle hoe 'CANAL de MOZ' iahany aloh e..
        if "CANAL DE MOZAMBIQUE" in text:
            found_canal = True
            continue

        # De mitazona ilay 10/20 foana
        if found_canal and "10S/20S" in text:
            moz_msg = get_clean_text(p)
            break

    if situation_block:
        avis = f"**Situation generale**:\n{insert_line_breaks(situation_block)}"
    else:
        avis = "**Avis**:\nNEANT."

    haute_msg = (
        f"**BULLETIN MARINE HAUTE MER**\n\n"
        f"{insert_line_breaks(haute_title)}\n\n"
        f"{avis}\n\n"
        f"10S/20S :\n{insert_line_breaks(moz_msg)}"
    )

    return [
        {"message": cotiere_msg, "image": IMAGE_COTIERE},
        {"message": haute_msg, "image": IMAGE_HAUTE_MER},
    ]


def format_as_js(marine_messages):
    js = "const MarineMessages = [\n"
    for item in marine_messages:
        js += "    {\n"
        js += f"        message: `{item['message']}`,\n"
        js += f"        image: '{item['image']}'\n"
        js += "    },\n"
    js = js.rstrip(",\n") + "\n];\n"
    return js

def replace_js_array(js_path, new_array_code):
    with open(js_path, "r", encoding="utf-8") as f:
        js_content = f.read()

    pattern = r"const MarineMessages = \[.*?\];"
    updated_content = re.sub(pattern, new_array_code, js_content, flags=re.DOTALL)

    with open(js_path, "w", encoding="utf-8") as f:
        f.write(updated_content)

    print("MarineMessages array updated successfully in JS file.")

if __name__ == "__main__":
    marine_msgs = extract_marine_messages()
    formatted = format_as_js(marine_msgs)
    replace_js_array(JS_FILE_PATH, formatted)
