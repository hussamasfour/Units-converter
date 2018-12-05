jQuery(document).ready(function(){
    
    $('#in').on('submit', function(evt){
        evt.preventDefault();   
        axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
            var cmInInch= result.data.centimetersInInch;
            var input = $('#inch').val();
            var total = parseFloat(input,10)*parseFloat(cmInInch,10);
            $('#total').html(total);
        });
    });

    $('#cm').on('submit', function (e) {
        e.preventDefault();
         axios.get('http://statenweb.mockable.io/conversions/').then(function(result2){
            var cmInInch= result2.data.centimetersInInch;     
            var inchInCms = result2.data.inchesInCm; 
            var input = $('#cm1').val();
            var total = parseFloat(input,10)*parseFloat(inchInCms,10);
            $('#total1').html(total);   
        });
    }); 
});