import React from 'react'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 " src="https://cdn.pixabay.com/photo/2018/05/16/18/08/e-commerce-3406613_1280.jpg" alt="First slide" style={{ height: '650px' }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png" alt="Second slide" style={{ height: '650px' }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2015/09/16/08/53/shop-942398_1280.jpg" alt="Third slide" style={{ height: '650px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
