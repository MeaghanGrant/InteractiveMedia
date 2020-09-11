d3.select("#animals")
    .on("click",function()
        {
            d3.select("#animalBox")
                .classed("hidden", false);
        })
d3.select("#panda")
    .on("click", function()
    {
            d3.select("#banner")
                .text("Pandas have white and black fur.");
        })
d3.select("#monkey")
    .on("click",function()
        {
            d3.select("#banner")
                .text("Monkeys have orange hair.");
        })
var setZebraPic = function(img)
{
 d3.select("#zebra")
                .attr("src",img);
}
d3.select("#zebra")
.on("mouseenter",function()
        {
            setZebraPic("pics/NZP-20090127-0422MM-000002.jpeg");
        })
.on("mouseleave",function()
        {
           setZebraPic("pics/NZP-20100819-301MM.jpeg");
        })
 .on("click",function()
        {
            d3.select("#banner")
                .text("Zebras have black and white fur. Flamingos have pink feathers.");
        })