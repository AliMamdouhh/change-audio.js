// إنشاء عنصر الصوت وإضافة الخصائص اللازمة
const audioElement = document.createElement('audio');
audioElement.setAttribute('id', 'audio');

const sourceElement = document.createElement('source');
sourceElement.setAttribute('src', 'https://github.com/AliMamdouhh/-/blob/main/hover.mp3?raw=true');
sourceElement.setAttribute('type', 'audio/mp3');

audioElement.appendChild(sourceElement);

// إنشاء زر التحكم في الصوت وإضافة الخصائص اللازمة
const toggleAudioButton = document.createElement('button');
toggleAudioButton.setAttribute('id', 'toggleAudio');
toggleAudioButton.textContent = 'إيقاف الصوت';

// إضافة العناصر إلى الصفحة
document.body.appendChild(audioElement);
document.body.appendChild(toggleAudioButton);

// استدعاء العناصر اللازمة
const elements = document.querySelectorAll('a, button, div, span');

// تعريف متغير لحالة تشغيل الأصوات
let audioEnabled = true;

// تحديث قيمة متغير audioEnabled إذا تم تخزين قيمة سابقة
if (localStorage.getItem('audioEnabled') !== null) {
  audioEnabled = localStorage.getItem('audioEnabled') === 'true';
}

// تحديث مظهر زر التحكم في الأصوات
updateToggleAudioButton();

// إضافة مستمع للضغط على الروابط والأزرار
elements.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (audioEnabled) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  });
});

// إضافة مستمع للضغط على زر التحكم في الأصوات
toggleAudioButton.addEventListener('click', (event) => {
  audioEnabled = !audioEnabled;
  localStorage.setItem('audioEnabled', audioEnabled);
  updateToggleAudioButton();
});

// تحديث مظهر زر التحكم في الأصوات بناءً على قيمة متغير audioEnabled
function updateToggleAudioButton() {
  if (audioEnabled) {
    toggleAudioButton.innerHTML = 'إيقاف الصوت';
  } else {
    toggleAudioButton.innerHTML = 'تشغيل الصوت';
  }
}
