// إنشاء عنصر الصوت
const audioElement = document.createElement('audio');
audioElement.id = 'audio';

// إضافة عنصر source إلى عنصر الصوت
const sourceElement = document.createElement('source');
sourceElement.src = 'https://github.com/AliMamdouhh/-/blob/main/hover.mp3?raw=true';
sourceElement.type = 'audio/mp3';

// إضافة عنصر source إلى عنصر الصوت
audioElement.appendChild(sourceElement);

// استدعاء العناصر اللازمة
const elements = document.querySelectorAll('a, button, div, span');
const toggleAudioButton = document.createElement('button');
toggleAudioButton.id = 'toggleAudio';
toggleAudioButton.innerHTML = 'إيقاف الصوت';

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

// إضافة زر التحكم في الأصوات إلى الصفحة
document.body.appendChild(toggleAudioButton);
