(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };


    ext.startjs = function() {
        $.ajax({
            url:"https://reqres.in/api/register",
            type:"POST",
            data:{
          "payload": "TEST"
        },
            success: function (data) {
                console.log(data);
                let json = JSON.parse(data);
                console.log(json);
                return 12;
            }
        }); 
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', '%n', 'startjs', 0],
        ]
    };

    // Register the extension
    ScratchExtensions.register('FCKJS', descriptor, ext);
})({});