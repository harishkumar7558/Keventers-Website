
import "./Order.css"
export default function Orders() {

    return (
        <>
            <div class="container-fluid text-start bg-secondary ordermain" style={{ "overflow": "hidden","z-index":"-1" }}>
                <img class="star" src="./Images/star.png" alt="" width={"100%"} />
                <div class="d-flex justify-content-evenly orderhead">
                    <img class="gif" src="./Images/giphy.gif" alt="" width={"50%"} />
                    <div className="orderbut">
                        <a herf="https://www.zomato.com/ncr/restoran/keventers-milkshakes-desserts"><button class="btn btn-dark w-75 mb-5 p-2">ORDER ON ZOMATO</button></a>
                        <a herf="https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-saket-nehru-place-delhi-14128"><button class="btn btn-dark w-75  mb-5 p-2">ORDER ON SWIGGY</button></a>
                        <a herf="/store"><button class="btn btn-dark w-75 p-2">FIND A STORE</button></a>
                    </div>
                </div>
                
            </div>

        </>
    )
}