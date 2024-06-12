
import "./TheTeam.css";
export default function TheTeam() {

    return (
        <div class=
        'flexing'>
        <h1 class="mt-5">The Team</h1>
            <div class="d-flex container text-start mt-5 p-2 justify-content-evenly" style={{"border-bottom":"2px solid black"}}>
                
                <div class=" mb-5" style={{"width":"100%","border-bottom":"2px 2px solid black"}}>
                    <img src="./Images/agastya.jpg" class="card-img-top" alt="..."/>
                </div>
                <div class="p-5 m-2">
                    <h2>Agastya Dalmia</h2>
                    <h4>Founder & CEO</h4>
                    <p>Meet Agastya – a visionary entrepreneur and distinguished board member of Keventers, celebrated for his unwavering commitment to preserving the brand’s rich heritage while injecting a fresh appeal for the modern age. Proudly continuing his notable Indian business family’s legacy with a long-standing industrial history, Agastya is also deeply involved in philanthropic initiatives through the Amba Dalmia Foundation Trust.</p>
                    <p>Agastya’s journey is an inspiring testament to the power of passion and dedication, impacting both the corporate realm and the less fortunate profoundly</p>
                </div>
            </div>

            <div class="d-flex container text-start mt-5 mb-5 p-2 justify-content-evenly" style={{"border-bottom":"2px solid black"}}>
                
                <div class=" mb-4" style={{"width":"100%","border-bottom":"2px 2px solid black"}}>
                    <img src="./Images/aman.jpg" class="card-img-top" alt="..."/>
                </div>
                <div class="p-5 m-2">
                    <h2>Aman Arora</h2>
                    <h4>Founder & CMO</h4>
                    <p>Aman is a seasoned entrepreneur with significant contributions to multiple consumer retail and service brands. His extensive expertise in Marketing, Strategy, and Business Development is evident in his role as CMO & Co-founder of Keventers. Born and bred in New Delhi, he plays a pivotal role in the brand’s revival and ongoing product innovation.</p>
                    <p>Outside the corporate realm, Aman’s dedication to fitness, gastronomy, and a passion for good design enriches his work with creativity and fresh perspectives.</p>
                </div>
            </div>

            <div class="d-flex container text-start mt-5 mb-5 p-2 justify-content-evenly" style={{"border-bottom":"2px solid black"}}>
                
                <div class=" mb-5" style={{"width":"100%","border-bottom":"2px 2px solid black"}}>
                    <img src="./Images/sohrab.png" class="card-img-top" alt="..."/>
                </div>
                <div class="p-5 m-2">
                    <h2>Sohrab Sitaram</h2>
                    <h4>Founder</h4>
                    <p>Sohrab is a prominent name in the hospitality industry across India and the Middle East. With his visionary leadership and strategic acumen, Sohrab has steered Keventers to a remarkable milestone of 200+ outlets in just three years, solidifying its status as an iconic milkshake brand.</p>
                    <p>His interests encompass diverse fields, enriching his journey with depth and diversity. He’s a sought-after presence at events, sharing wisdom and experiences, including TEDx talks.</p>
                </div>
            </div>
        </div>
    )
}