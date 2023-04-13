<br>
script type="text/javascript";
</br>
if (window.FileReader) 
{
  //then your code goes here<br>
<br>
&lt;input type="file" id="files" /&gt;<br>
&lt;output id="list"&gt;&lt;/output&gt;<br>


<br>
document.getElementById('files').addEventListener('change', handleFileSelect, false);
</br>

<br>
function handleFileSelect(evt) 
{<br>
    var files = evt.target.files;</br>

var f = files[0];</br>
    var reader = new FileReader();</br>
<p>     reader.onload = (function(theFile) {</br>
        return function(e) {<br>
          document.getElementById('list').innerHTML = ['&lt;img src="', e.target.result,'" title="', theFile.name, '" width="50" /&gt;'].join('');</br>
        };<br>
      })(f);</p>
<p>     reader.readAsDataURL(f);<br>
}

</br>





} 

else {<br>
  alert('This browser does not support FileReader');</br>
}<br>
&lt;/script&gt;</br>

