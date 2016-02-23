var video = document.querySelector('video')

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: false // set to true to enable audio
}).then(function (mediaStream) {
  video.src = window.URL.createObjectURL(mediaStream)
  video.onloadedmetadata = function () {
    video.play()
  }
}).catch(function (error) {
  console.error('No media stream', error)
})

var buttons = document.querySelectorAll('button')

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener('click', function (e) {
    video.className = e.target.getAttribute('data-filter')
  })
})
