module.exports = (fn)=> {
    return function (req, res, next) {
        fn(req, res, next).catch((error) => {
            console.error(error);
            next(error);
        });
    };
}