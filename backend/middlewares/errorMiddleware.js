


export const notFound = (req,res,next) => {

    const  error = new Error(`Not Found - ${req.originalUrl}`);

    res.status(404);
    next(error);


}


export const errorHandler = (error,req,res, next) => {

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode

    res.status(statusCode);

    console.log(error.message);

    res.json({

        message: error.message,
        stack: process.env.NODE_ENv === 'production' ? null :error.stack
    })

}

