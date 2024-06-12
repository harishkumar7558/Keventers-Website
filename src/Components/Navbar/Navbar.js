
import "./Navbar.css"
export default function Navbar() {

    return (
        <>
            <nav class="navbar sticky-top navbar-expand-lg navbar-dark ">
                <div class="container-fluid navbarblack">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active navbar-brand" aria-current="page" href="/">HOME</a>
                            </li>
                            <li class="nav-item  dropdown">
                                <a class="nav-link dropdown-toggle navbar-brand" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ABOUT
                                </a>
                                <ul class="dropdown-menu bg-dark dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="/about">OUR STORY</a></li>
                                    <li><a class="dropdown-item" href="/contact">CONTACT US</a></li>
                                    
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navbar-brand" href="/career">CAREERS</a>
                            </li>
                            <li class="nav-item  dropdown">
                                
                                    <a class="btn navbar-brand dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        ORDER ONLINE
                                    </a>

                                    <ul class="dropdown-menu bg-dark dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="https://www.zomato.com/ncr/restoran/keventers-milkshakes-desserts">ZWIGGY</a></li>
                                        <li><a class="dropdown-item" href="https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-saket-nehru-place-delhi-14128">ZOMATO</a></li>
                                        
                                    </ul>
                                
                            </li>

                            <li class="nav-item">
                                <a class="nav-link navbar-brand" href="/store">STORES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navbar-brand" href="#">REWARDS</a>
                            </li>

                            

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}