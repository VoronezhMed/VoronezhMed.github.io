
module.exports.Funcs = {
    HeaderBlur: {
        get: function() {
            return Params.HeaderBlur;
        },
        set: function(value) {
            Params.HeaderBlur = value;
        }
    }
};

module.exports.Params = {
    HeaderBlur: "blur(3px)"
}