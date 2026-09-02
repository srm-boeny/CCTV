const repository = {
  owner: 'srm-boeny',
  name: 'CCTV',
  branch: 'main',
  contentPath: 'content/webmaster-content.json'
};

const apiBase = 'https://api.github.com';
const apiVersion = '2022-11-28';
const maxImageSize = 10 * 1024 * 1024;

const loginView = document.getElementById('login-view');
const loginForm = document.getElementById('login-form');
const tokenInput = document.getElementById('github-token');
const editorView = document.getElementById('editor-view');
const sessionStatus = document.getElementById('session-status');
const saveStatus = document.getElementById('save-status');
const saveButton = document.getElementById('save-button');
const logoutButton = document.getElementById('logout-button');
const alertLevelInput = document.getElementById('alert-level');
const alertTypeInput = document.getElementById('alert-type');
const slidesList = document.getElementById('slides-list');
const slideTemplate = document.getElementById('slide-template');
const addSlideButton = document.getElementById('add-slide');

let accessToken = '';
let contentSha = '';
let content = { alert: { level: 'none', type: 'generic' }, slides: [] };
const pendingUploads = new Map();

function setStatus(message, type = '') {
  saveStatus.textContent = message;
  saveStatus.className = `save-status${type ? ` is-${type}` : ''}`;
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${apiBase}${path}`, {
    ...options,
    cache: 'no-store',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${accessToken}`,
      'X-GitHub-Api-Version': apiVersion,
      ...options.headers
    }
  });

  if (!response.ok) {
    let detail = `Erreur GitHub ${response.status}`;
    try {
      const error = await response.json();
      if (error.message) detail = error.message;
    } catch (_) {
      // Keep the HTTP status when GitHub returns no JSON body.
    }
    throw new Error(detail);
  }

  return response.status === 204 ? null : response.json();
}

function decodeBase64Utf8(value) {
  const bytes = Uint8Array.from(atob(value.replace(/\s/g, '')), character => character.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeBase64Utf8(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  for (let index = 0; index < bytes.length; index += 1) {
    binary += String.fromCharCode(bytes[index]);
  }
  return btoa(binary);
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1]);
    reader.onerror = () => reject(new Error(`Impossible de lire ${file.name}`));
    reader.readAsDataURL(file);
  });
}

function createSlideId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `slide-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function safeImageName(filename) {
  const dotIndex = filename.lastIndexOf('.');
  const extension = dotIndex >= 0 ? filename.slice(dotIndex).toLowerCase() : '';
  const base = (dotIndex >= 0 ? filename.slice(0, dotIndex) : filename)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'image';
  return `${Date.now()}-${base}${extension}`;
}

function previewSource(slide) {
  const pending = pendingUploads.get(slide.id);
  return pending?.previewUrl || (slide.image ? `../${slide.image}` : '');
}

function updateMoveButtons() {
  const editors = [...slidesList.querySelectorAll('.slide-editor')];
  editors.forEach((editor, index) => {
    editor.querySelector('.move-up').disabled = index === 0;
    editor.querySelector('.move-down').disabled = index === editors.length - 1;
  });
}

function renderSlides() {
  slidesList.innerHTML = '';

  content.slides.forEach((slide, index) => {
    const editor = slideTemplate.content.firstElementChild.cloneNode(true);
    const preview = editor.querySelector('.slide-preview');
    const fileInput = editor.querySelector('.slide-file');
    const titleInput = editor.querySelector('.slide-title-input');
    const descriptionInput = editor.querySelector('.slide-description');
    const enabledInput = editor.querySelector('.slide-enabled');
    const imagePath = editor.querySelector('.image-path');
    const source = previewSource(slide);

    editor.dataset.slideId = slide.id;
    if (source) preview.src = source;
    titleInput.value = slide.title || '';
    descriptionInput.value = slide.description || '';
    enabledInput.checked = slide.enabled !== false;
    imagePath.textContent = slide.image || 'Aucune image sélectionnée';

    titleInput.addEventListener('input', event => {
      slide.title = event.target.value;
    });
    descriptionInput.addEventListener('input', event => {
      slide.description = event.target.value;
    });
    enabledInput.addEventListener('change', event => {
      slide.enabled = event.target.checked;
    });

    fileInput.addEventListener('change', event => {
      const [file] = event.target.files;
      if (!file) return;
      if (!['image/png', 'image/jpeg'].includes(file.type)) {
        event.target.value = '';
        setStatus('Format refusé. Utilisez une image PNG ou JPEG.', 'error');
        return;
      }
      if (file.size > maxImageSize) {
        event.target.value = '';
        setStatus('L’image dépasse la taille maximale de 10 Mo.', 'error');
        return;
      }

      const previous = pendingUploads.get(slide.id);
      if (previous?.previewUrl) URL.revokeObjectURL(previous.previewUrl);

      const path = `assets/uploads/${safeImageName(file.name)}`;
      const previewUrl = URL.createObjectURL(file);
      pendingUploads.set(slide.id, { file, path, previewUrl });
      slide.image = path;
      preview.src = previewUrl;
      imagePath.textContent = path;
      setStatus('Image prête à être publiée.');
    });

    editor.querySelector('.move-up').addEventListener('click', () => {
      if (index === 0) return;
      [content.slides[index - 1], content.slides[index]] = [content.slides[index], content.slides[index - 1]];
      renderSlides();
    });
    editor.querySelector('.move-down').addEventListener('click', () => {
      if (index === content.slides.length - 1) return;
      [content.slides[index + 1], content.slides[index]] = [content.slides[index], content.slides[index + 1]];
      renderSlides();
    });
    editor.querySelector('.delete-slide').addEventListener('click', () => {
      const pending = pendingUploads.get(slide.id);
      if (pending?.previewUrl) URL.revokeObjectURL(pending.previewUrl);
      pendingUploads.delete(slide.id);
      content.slides.splice(index, 1);
      renderSlides();
    });

    slidesList.appendChild(editor);
  });

  updateMoveButtons();
}

async function loadContent() {
  const path = `/repos/${repository.owner}/${repository.name}/contents/${repository.contentPath}?ref=${repository.branch}`;
  const file = await apiRequest(path);
  const parsed = JSON.parse(decodeBase64Utf8(file.content));

  contentSha = file.sha;
  content = {
    alert: {
      level: parsed.alert?.level || 'none',
      type: parsed.alert?.type || 'generic'
    },
    slides: Array.isArray(parsed.slides)
      ? parsed.slides.map(slide => ({
          id: slide.id || createSlideId(),
          title: slide.title || '',
          description: slide.description || '',
          image: slide.image || '',
          enabled: slide.enabled !== false
        }))
      : []
  };

  alertLevelInput.value = content.alert.level;
  alertTypeInput.value = content.alert.type;
  renderSlides();
}

async function publishFile(path, base64Content, message, sha = '') {
  const body = {
    message,
    content: base64Content,
    branch: repository.branch
  };
  if (sha) body.sha = sha;

  return apiRequest(`/repos/${repository.owner}/${repository.name}/contents/${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
}

loginForm.addEventListener('submit', async event => {
  event.preventDefault();
  const submittedToken = tokenInput.value.trim();
  if (!submittedToken) return;

  accessToken = submittedToken;
  tokenInput.value = '';
  sessionStatus.textContent = 'Connexion…';

  try {
    const user = await apiRequest('/user');
    await loadContent();
    sessionStatus.textContent = `Connecté : ${user.login}`;
    loginView.hidden = true;
    editorView.hidden = false;
    setStatus('Contenu chargé depuis GitHub.');
  } catch (error) {
    accessToken = '';
    sessionStatus.textContent = 'Non connecté';
    tokenInput.focus();
    setStatus('');
    window.alert(`Connexion refusée : ${error.message}`);
  }
});

addSlideButton.addEventListener('click', () => {
  content.slides.push({
    id: createSlideId(),
    title: '',
    description: '',
    image: '',
    enabled: true
  });
  renderSlides();
  slidesList.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

alertLevelInput.addEventListener('change', event => {
  content.alert.level = event.target.value;
});

alertTypeInput.addEventListener('change', event => {
  content.alert.type = event.target.value;
});

editorView.addEventListener('submit', async event => {
  event.preventDefault();

  const invalidSlide = content.slides.find(slide => !slide.title.trim() || !slide.image);
  if (invalidSlide) {
    setStatus('Chaque élément doit avoir un titre et une image.', 'error');
    return;
  }

  saveButton.disabled = true;
  setStatus('Publication des images…');

  try {
    for (const upload of pendingUploads.values()) {
      const imageContent = await fileToBase64(upload.file);
      await publishFile(upload.path, imageContent, `Ajout de ${upload.file.name}`);
    }

    setStatus('Publication des descriptions et de la vigilance…');
    const json = `${JSON.stringify(content, null, 2)}\n`;
    const result = await publishFile(
      repository.contentPath,
      encodeBase64Utf8(json),
      'Mise à jour du bulletin par le webmaster',
      contentSha
    );

    contentSha = result.content.sha;
    pendingUploads.forEach(upload => URL.revokeObjectURL(upload.previewUrl));
    pendingUploads.clear();
    setStatus('Publication terminée sur la branche main.', 'success');
  } catch (error) {
    setStatus(`Échec de la publication : ${error.message}`, 'error');
  } finally {
    saveButton.disabled = false;
  }
});

logoutButton.addEventListener('click', () => {
  accessToken = '';
  window.location.reload();
});
