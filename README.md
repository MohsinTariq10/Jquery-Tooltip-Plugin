Jquery-Tooltip-Plugin
=====================

An optimized and minimalistic Jquery Tooltip Plugin 

How to use
==========

1. Link to tooltip.js and tooltip.css file

2. Apply .tooltip function to the desired element
<script>
  $(".tooltip").tooltip();
</script>

3. Add data-tip-source attribute to the elements.
<a href="#" data-tip-source="hey this is a cool tooltip" class="tooltip">HTML-based tooltip</a>

Thats it now when ever hover on a.tooltip a tooltip will open containing the text "hey this is a cool tooltip".
