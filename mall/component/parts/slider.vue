<template>
  <link rel="stylesheet" href="mall/vendor/bootstrap-slider/slider.css">
  <input type="text" value="" class="slider form-control" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="green">
</template>

<script>
$(function () {
  $('.slider').slider();
});

  export default {
    data() {

    },
    components: {
    }
  }
</script>
