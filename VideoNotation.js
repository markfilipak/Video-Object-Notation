function anchor_show_onclick(that)
{
that.nextSibling.nextSibling.style.display='block';
iframe_size(that.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild.nextSibling.nextSibling);
}

function anchor_x_onclick(that)
{
that.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none';
}

function iframe_open(that)
{
window.open(that.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.src);
}

function box_size(that)
{
that.style.width=parseInt(window.getComputedStyle(document.body).getPropertyValue('width'))+'px';
}

function iframe_size(that)
{
that.style.width=parseInt(window.getComputedStyle(document.body).getPropertyValue('width'))+'px';
that.style.height=parseInt(window.innerHeight/2)+'px';
}
