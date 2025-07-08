import requests
from bs4 import BeautifulSoup
import re

# === CONFIG ===
URL = "https://www.meteomadagascar.mg/prevision/previsions-marines-3/"
JS_FILE_PATH = "script.js"
IMAGE_COTIERE = "Image_marine_cotiere_SITEWEB-MHJ.png"
IMAGE_HAUTE_MER = "Image_marine_haute_mer_SITEWEB.png"

def get_clean_text(p):
    text = p.get_text(separator=' ').strip()
    text = text.replace('\xa0', ' ').replace('  ', ' ')
    return text

def insert_line_breaks(text):
    text = re.sub(r'(?<!\d)\.(?!\d)', '.\\n', text)
    return text.strip()


def extract_marine_messages():
    res = requests.get(URL)
    soup = BeautifulSoup(res.content, "html.parser")
    
    # === Extract SITUATION GENERALE block (if it exists) ===
    situation_block = ""
    for h3 in soup.find_all("h3", class_="h3-custom"):
        if h3.text.strip().upper() == "SITUATION GENERALE":
            next_div = h3.find_next_sibling("div", class_="cnt-rte")
            if next_div:
                list_items = next_div.find_all("li")
                situation_block = "\\n ".join(li.get_text(strip=True) for li in list_items)
            break
            
    # === Marine côtière ===
    cotiere_section = soup.find("div", id=lambda x: x and x.startswith("tab-desc-0"))
    cotiere_title = get_clean_text(cotiere_section.find("h2")) if cotiere_section else ""
    paragraphs = cotiere_section.find_all("p") if cotiere_section else []
    cap_msg = ""
    for p in paragraphs:
        if "CAP ST ANDRÉ A ANALALAVA" in p.text.upper():
            cap_msg = get_clean_text(p)
            break
    cotiere_msg = f"""**Bulletin marine cotière**\\n\\n{insert_line_breaks(cotiere_title)}\\n\\n**CAP ST ANDRÉ A ANALALAVA**\\n{insert_line_breaks(cap_msg)}"""

    # === Marine haute mer ===
    haute_section = soup.find("div", id=lambda x: x and x.startswith("tab-desc-1"))
    haute_title = get_clean_text(haute_section.find("h2")) if haute_section else ""
    h_paragraphs = haute_section.find_all("p") if haute_section else []
    moz_msg = ""
    for i, p in enumerate(h_paragraphs):
        if "10S/20S" in p.text and "CANAL" in h_paragraphs[i - 1].text.upper():
            moz_msg = get_clean_text(p)
            break
    #haute_msg = f"""**BULLETIN MARINE HAUTE MER**\\n\\n{insert_line_breaks(haute_title)}\\n\\n**Avis**: \\nNEANT.\\n\\n10S/20S :\\n{insert_line_breaks(moz_msg)}"""
    # === Build Avis section ===
    avis = "**Avis**:"
    sitgal = "**Situation generale**:"
    if situation_block:
        sitgal += f"\\n{insert_line_breaks(situation_block)}"
        avis = sitgal
    else:
        avis += " \\nNEANT."

    haute_msg = f"""**BULLETIN MARINE HAUTE MER**\\n\\n{insert_line_breaks(haute_title)}\\n\\n{avis}\\n\\n10S/20S :\\n{insert_line_breaks(moz_msg)}"""

    return [
        {
            "message": cotiere_msg,
            "image": IMAGE_COTIERE
        },
        {
            "message": haute_msg,
            "image": IMAGE_HAUTE_MER
        }
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

    print("✅ MarineMessages array updated successfully in JS file.")

if __name__ == "__main__":
    marine_msgs = extract_marine_messages()
    formatted = format_as_js(marine_msgs)
    replace_js_array(JS_FILE_PATH, formatted)
