const textToSpeech = document.getElementById('text-to-speech')
const speakButton = document.getElementById('speak-button')

textToSpeech.addEventListener('focus', () => {
    textToSpeech.classList.remove('placeholder')
})

textToSpeech.addEventListener('blur', () => {
    if (textToSpeech.value === '') {
        textToSpeech.classList.add('placeholder')
    }
})

// بررسی پشتیبانی از SpeechSynthesis
if ('speechSynthesis' in window) {
    const synth = window.speechSynthesis

    speakButton.addEventListener('click', () => {
        const text = textToSpeech.value
        const utterance = new SpeechSynthesisUtterance(text)

        // تنظیم لهجه (در اینجا بریتیش انگلیسی)
        utterance.lang = 'en-GB'

        // تنظیم صدا (در اینجا زنانه)
        utterance.voice = synth.getVoices().find(voice => voice.name === 'Google UK English Female')

        // تنظیم سرعت (0.8 = 80% سرعت نرمال)
        utterance.rate = 0.9

        synth.speak(utterance)
    })
} else {
    alert('مرورگر شما از Web Speech API پشتیبانی نمی‌کند.')
}
