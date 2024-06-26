// Chaoqun Ding

// prevent default action of the submit button.
$("#submit").attr("disabled", true).on("mouseenter", function(){
    $(this).css("cursor", "not-allowed")
});

// remove all size options.
$(".unchecked").prop("checked", false);

// set default color to black.
$("#black").prop("checked", true);
// quantity reset to 1:
$("#quantity").val(1);

// set default images to black color.
$("#main-image-box img").attr({src: "../product-images/t-shirt-black-no-model.jpg", alt: "Black T-shirt with No Model"});
$("#thumbnail1-box img").attr({src: "../product-images/t-shirt-black-no-model.jpg", alt: "Black T-shirt with No Model"});
$("#thumbnail2-box img").attr({src: "../product-images/t-shirt-black-front.jpg", alt: "Black T-shirt Front"});
$("#thumbnail3-box img").attr({src: "../product-images/t-shirt-black-back.jpg", alt: "Black T-shirt Back"});

// darken thumbnail image if mouse in and lighten back when mouse out. show image clicked at main image area.
$(".thumbnails").on("mouseenter", handlerIn).on("mouseleave", handlerOut).on("click", handlerClick);

function handlerIn(){
    $(this).css("filter", "brightness(80%)")
}


function handlerOut(){
    $(this).css("filter", "brightness(100%)")
}


function handlerClick(){
    $("#main-image-box img").attr({src: $(this).attr("src"), alt: $(this).attr("alt")});
}


let USDollar = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
let unitPrice = 30;
let quantity = $("#quantity").val();
let totalPrice = unitPrice * quantity;
const unitPriceFormatted = USDollar.format(unitPrice);
const totalPriceFormatted = USDollar.format(totalPrice);
$("#unit-price").html(unitPriceFormatted);
$("#total-price").html(totalPriceFormatted);


$("#quantity").on("change", handlerChange);


function handlerChange(){
    quantity = $(this).val();
    totalPrice = unitPrice * quantity;
    const totalPriceFormatted = USDollar.format(totalPrice);
    $("#total-price").html(totalPriceFormatted);
}


$(`input[name="size"]`).on("click", updateSize);


function updateSize(){
    $("#size-box span").html($(this).val());
    // once the size is provided, cange submit button text to Add To Cart and enable submit button
    $("#submit").attr({"disabled": false, "value": "Add To Cart"}).on("mouseenter", function(){
        $(this).css("cursor", "default")
    });
}

// change color, don't change type of the main image.
$(`input[name="color"]`).on("click", updateColor);

function updateColor(){
    const chosenColor = $(this).val();
    $("#thumbnail1-box img").attr({src: `../product-images/t-shirt-${chosenColor.toLowerCase()}-no-model.jpg`, alt: `${chosenColor} T-shirt with No Model`});
    $("#thumbnail2-box img").attr({src: `../product-images/t-shirt-${chosenColor.toLowerCase()}-front.jpg`, alt: `${chosenColor} T-shirt Front`});
    $("#thumbnail3-box img").attr({src: `../product-images/t-shirt-${chosenColor.toLowerCase()}-back.jpg`, alt: `${chosenColor} T-shirt Back`});

    console.log($("#main-image-box img").attr("alt"));

    if ($("#main-image-box img").attr("alt").match(/[no model]$/i)){
        $("#main-image-box img").attr({src: `../product-images/t-shirt-${chosenColor.toLowerCase()}-no-model.jpg`, alt: `${chosenColor} T-shirt with No Model`});
    }
    else if ($("#main-image-box img").attr("alt").match(/front$/i)){
        $("#main-image-box img").attr({src: `../product-images/t-shirt-${chosenColor.toLowerCase()}-front.jpg`, alt: `${chosenColor} T-shirt Front`});
    }
    else{
        $("#main-image-box img").attr({src: `../product-images/t-shirt-${chosenColor.toLowerCase()}-back.jpg`, alt: `${chosenColor} T-shirt Back`});
    }
}