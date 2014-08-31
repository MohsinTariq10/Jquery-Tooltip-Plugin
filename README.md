Jquery-Tooltip-Plugin
=====================

An optimized and minimalistic Jquery Tooltip Plugin 

How to use
==========

1. Link to tooltip.js and tooltip.css file

2. Apply .tooltip function to the desired element
<code>
<script>
  $(".tooltip").tooltip();
</script>
</code>
3. Add data-tip-source attribute to the elements.
<code>
<a href="#" data-tip-source="hey this is a cool tooltip" class="tooltip">HTML-based tooltip</a>
</code>
Thats it now when ever hover on a.tooltip a tooltip will open containing the text "hey this is a cool tooltip".
