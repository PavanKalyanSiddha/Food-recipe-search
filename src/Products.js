import React from 'react'

const Products = ({data}) => {
  return (
    <div>
        <div className='row'>
            {data.map(data=>
                <div className='col-md-4'>
                    <div class="card" style={{"width":"18rem"}}>
                        <img class="card-image-top" src={data.recipe.image} alt=""/>
                        <div class="card-body">
                            <center>
                                <h5 class="card-title">{data.recipe.label}</h5>
                                <p class="card-text">Total Amount of Calories : {Math.round(data.recipe.calories)}</p>
                                <button class="btn btn-primary">Buy</button>
                            </center>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Products