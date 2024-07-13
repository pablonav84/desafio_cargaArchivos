const comprar = async (cid) => {

    let respuesta=await fetch(`/api/carritos/${cid}/purchase`,{
        method:"put"
    })
    let datos=await respuesta.json()
    Swal.fire({
        position: "top-end",
        title: "✔ Compra finalizada con exito",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        window.location.href = "/home";
      }, 2000);
  };
  