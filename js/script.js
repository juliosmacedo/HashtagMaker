function generateHashtag (str) {
  if (str.trim().length === 0) {
  return false;
  } else {
  const conc = str.split(/\s+/)
  for (let i=0;i<conc.length;i++) {
    conc[i] = conc[i][0].toUpperCase() + conc[i].substring(1);
    }
    hash = "#" + conc.join("");
    if (hash.length > 140) {
    return false
    } else {
      return hash;
  }}}

  

const btn = document.getElementById("button");
btn.onclick = function submit() {
  const str = document.getElementById("lift").value
  document.getElementById('info').innerHTML = `<h3><strong>${generateHashtag(str)}</strong></h3>`
}


