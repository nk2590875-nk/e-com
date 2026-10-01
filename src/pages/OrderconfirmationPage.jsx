import React from 'react'
import Breadcrum from '../components/Breadcrum'

export default function OrderConfirmationPage() {
  return (
    <>
    <div class="page-content">


   <Breadcrum title="Order has been placed"/>


   
   <section class="section-padding">
    <div class="container">

      <div class="separator mb-3">
        <div class="line"></div>
        <h3 class="mb-0 h3 fw-bold">Thank You!</h3>
        <div class="line"></div>
      </div>

      <div class="border p-4 text-center w-100">
          <h5 class="fw-bold mb-2">Thank You for Contacting us.</h5>
          <p class="mb-0">We have recived your message. We will reply you as soon as possible.</p>
      </div>

    </div>
  </section>


 </div>
    </>
  )
}
