
document.addEventListener("DOMContentLoaded", function () {
  // إنشاء العنصر الصوتي
  const audioElement = document.createElement("audio");
  audioElement.setAttribute("id", "audio");

  const sourceElement = document.createElement("source");
  sourceElement.setAttribute(
    "src",
    "https://github.com/AliMamdouhh/-/blob/main/hover.mp3?raw=true"
  );
  sourceElement.setAttribute("type", "audio/mp3");

  audioElement.appendChild(sourceElement);

  // إنشاء الزر
  const toggleAudioButton = document.createElement("a");
  toggleAudioButton.setAttribute("id", "toggleAudio");
  toggleAudioButton.textContent = "تشغيل/إيقاف الصوت";

  // إضافة العنصر الصوتي والزر إلى الصفحة
  document.body.appendChild(audioElement);
  document.body.appendChild(toggleAudioButton);

  // استدعاء العناصر اللازمة
  const elements = document.querySelectorAll("a, button, div, span");

  // تعريف متغير لحالة تشغيل الأصوات
  let audioEnabled = true;

  // تحديث قيمة متغير audioEnabled إذا تم تخزين قيمة سابقة
  if (localStorage.getItem("audioEnabled") !== null) {
    audioEnabled = localStorage.getItem("audioEnabled") === "true";
  }

  // تحديث مظهر الزر عند تحميل الصفحة
  updateToggleAudioButton();

  // إضافة مستمع للضغط على الروابط والأزرار
  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      if (audioEnabled) {
        audioElement.currentTime = 0;
        audioElement.play();
      }
    });
  });

  // إضافة مستمع للضغط على الزر للتحكم في الأصوات
  toggleAudioButton.addEventListener("click", (event) => {
    audioEnabled = !audioEnabled;
    localStorage.setItem("audioEnabled", audioEnabled);
    updateToggleAudioButton();
  });

  // تحديث مظهر الزر بناءً على قيمة متغير audioEnabled
  function updateToggleAudioButton() {
    if (audioEnabled) {
      toggleAudioButton.innerHTML = "إيقاف الصوت";
    } else {
      toggleAudioButton.innerHTML = "تشغيل الصوت";
    }
  }
});

