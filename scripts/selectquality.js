
function start() {
  const params = new URL(window.location.href).searchParams;
  dirUrl = 'scenes/' + params.get('scene') + '.json';
  const qualityPresets = ['phone', 'low', 'medium', 'high'];
  for (const quality of qualityPresets) {
    console.log(quality);
    const e = document.getElementById(quality);
    e.setAttribute('href', "/viewer?dir=" + dirUrl + '&quality=' + quality);
  }
}

window.onload = start;
