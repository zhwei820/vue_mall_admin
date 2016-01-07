<template>
    <link rel="stylesheet" href="./mall/vendor/daterangepicker/daterangepicker-bs3.css">
    <link rel="stylesheet" href="./mall/vendor/timepicker/bootstrap-timepicker.min.css">

    <div class="input-group">
      <div class="input-group-addon">
        <i class="glyphicon glyphicon-time"></i>
      </div>
      <input type="text" v-model="range" id="reservationtime" class="form-control pull-right" />
    </div>
</template>

<script>

    $(document).ready(function(){
      $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'YYYY-MM-DD hh:mm:ss'});
    })

    export default {
        data() {
          return {
            // range_data: 'dd',
          }
        },
        props : {
            range: String,
        },
        components: {
        },
        methods: {

        },
        ready(){
            // console.log(this.range);
        }
    }
</script>
