import React from 'react';

export default function Adminstrator (props) {


    const list = props.list && props.list.length > 0 ? props.list : [] ;


    


    return <section>
        

        <div class="container">
  <div class="row">
    <div class="col-sm-12">
        <br/>
        <h3 class="text-start team-sub-heading">Administrators</h3>
    </div>



 { list  && list.map((d) => {

 return <div class="col-sm-3">
    <div class="card">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={d.img} class="img-fluid rounded-circle card-img" alt="..."/>
    </div>
    <div class="col-md-8">
        <h6 class="card-title">{d.first_name} {d.last_name}</h6>
        <p class="card-text"><small class="text-body-secondary">{d.email}</small></p>
    </div>
  </div>
</div>
</div>
 

   }

   )}


    


  </div>
</div>

        <hr/>

    </section>
}