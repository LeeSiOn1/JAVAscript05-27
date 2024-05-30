// 이미지 슬라이드
    $(document).ready(function(){
        setInterval(function(){
            $('.slideWrap').animate({'margin-top':'-300px'}, 1000, function(){
                $('.slideImg:first').appendTo('.slideWrap');
                $('.slideWrap').css({'margin-top':'0'});
            });
        }, 3000);
    });