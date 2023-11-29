const express = require('express')
const mongoose = require('mongoose')
const Product = require('./productsModel/model')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false }))
 
app.get('/',(req,res) => 
{
    res.send('hello node API');
})

app.get('/blog' , (req,res) => 
{
    res.send(" Heyyo ");
})

app.get('/products' , async(req,res) => 
{
    try 
    {
        const products = await Product.find({});
        res.status(200).json(products);
    } 
    catch (error) 
    {
        res.status(500).json({message : error.message});
    }
})

app.get('/products/:id',async(req,res) => 
{
    try 
    {
        const {id} = req.params;
        const product = await Product.finallyById(id);
        res.status(200).json(products);
    } 
    catch (error) 
    {
        res.status(500).json({message : error.message});
    }
})

app.post('/products',async(req,res) => 
{
    try 
    {
        const product = await Product.create(req.body);
        res.status(200).json(products);
    } 
    catch (error) 
    {
        console.log(error.message);
        res.status(500).json({message : error.message});
    }
})

app.put('/products/:id',async(req,res) => {
    try 
    {
        const {id} = req.params;
        const product = await Product.finallyByIdAndUpdate(id, req.body, { new:true});
        if(!product)
        {
            return res.status(404).json({message: `cannot find any product with this id ${id}`})
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(products);
    } 
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
})

app.delete('/products/:id',async(req,res) => 
{
    try 
    {
        const {id} = req.params;
        const product = await Product.finallyByIdAndDelete(id, req.body, { new:true});
        if(!product)
        {
            return res.status(404).json({message: `cannot find any product with this id ${id}`})

        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(products);
    } 
    catch (error) 
    {
        res.status(500).json({message : error.message});
    }
})









/*app.use(express.json())
app.use(express.urlencoded({extended : false }))

app.get('/',(req,res) => 
{
    res.send('hello node');
})

app.get('/blog' , (req,res) => 
{
    res.send(" Hey ");
})*/








app.get('/reviews ' , async(req,res) => 
{
    try 
    {
        const reviews = await Review.find({});
        res.status(200).json(reviews);
    } 
    catch (error) 
    {
        res.status(500).json({message : error.message});
    }
})

app.get('/reviews/:id',async(req,res) => 
{
    try 
    {
        const {id} = req.params;
        const review = await Review.finallyById(id);
        res.status(200).json(reviews);
    } 
    catch (error) 
    {
        res.status(500).json({message : error.message});
    }
})

app.post('/reviews',async(req,res) => 
{
    try 
    {
        const review = await Review.create(req.body);
        res.status(200).json(reviews);
    } 
    catch (error) 
    {
        console.log(error.message);
        res.status(500).json({message : error.message});
    }
})

app.put('/reviews/:id',async(req,res) => {
    try 
    {
        const {id} = req.params;
        const review = await Review.finallyByIdAndUpdate(id, req.body, { new:true});
        if(!product)
        {
            return res.status(404).json({message: `no review ${id}`})
        }
        const updateReview = await Review.findById(id);
        res.status(200).json(reviews);
    } 
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
})

app.delete('/reviews/:id',async(req,res) => 
{
    try 
    {
        const {id} = req.params;
        const review = await Review.finallyByIdAndDelete(id, req.body , { new:true});
        if(!review)
        {
            return res.status(404).json({message: `no review ${id}`})

        }
        const updateReview = await Review.findById(id);
        res.status(200).json(reviews);
    } 
    catch (error) 
    {
        res.status(500).json({message : error.message});
    }
})






mongoose.connect(`mongodb+srv://natashasharma29463:<password>@natashaapi.f0lcndk.mongodb.net/?retryWrites=true&w=majority`)
.then(() => 
{
    console.log(`connected`)
    app.listen(3000, () => {
        console.log("Server started on 3000");
    })
})
.catch((error) => 
{
    console.log(error)
})
