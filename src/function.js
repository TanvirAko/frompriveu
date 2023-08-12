// emali reglurexpression
const onalart = (  item , alert = "warning", ) => {
  return `
      <div class="alert alert-${alert} alert-dismissible fade show" role="alert">
          ${item}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
};
const inemail=(email)=>{
  const Pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
return Pattern.test(email)

}
const ismobile=(mobile)=>{
  const mobPattern = /^(?:\+?88)?01[3-9]\d{8}$/;
return mobPattern.test(mobile)
}
