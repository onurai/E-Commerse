import React from 'react'

const Shop = () => {
  const images = [
    'https://www.edmtunes.com/wp-content/uploads/2022/06/iPhone-14-Mock-pill-and-hole.webp',
    'https://i.ytimg.com/vi/JyRd7PijEu0/maxresdefault.jpg',
    'https://i.ytimg.com/vi/AFHxibt46E4/maxresdefault.jpg',
    'https://phonesdata.com/files/models/Xiaomi-Redmi-K50-Ultra-289.jpg'
  ]
    


  return (
    <div className='container'>
      <div className="row mt-lg-5">
        <div className="col-lg-4 left">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> I
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 products">
          <div className="row">
            {
              images.map((img, index) =>{
                return(
                  <div key={index} className="col-lg-3">
                    <div className="card" >
                      <img src={img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick e</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop