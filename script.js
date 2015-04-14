<script>
	$(".tab__content").hide();
	$(".tab__content:first").hide();
	$("#tab1").show();
	$(".tab__head li").removeClass("active");
	$("#t1").addClass("active");
	$(".tab__head li").click(function() {
	$(".tab__content").hide();
	var activeTab = $(this).attr("rel"); 
	$("#"+activeTab).show();
	$(".tab__head li").removeClass("active");
	$(this).addClass("active");
});
</script>
