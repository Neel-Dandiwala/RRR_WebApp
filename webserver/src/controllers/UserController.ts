import { Request, Response } from 'express';

// @desc   Get User
// @route  GET /user/login
// @access Private
const getUser = async(req: Request, res: Response) => {
    res.status(200).json({ message: 'User Get'});
}

// @desc   Get User
// @route  GET /user/login
// @access Private
const setUser = async(req: Request, res: Response) => {
    res.status(200).json({ message: 'User Set'});
}

// @desc   Get User
// @route  GET /user/login
// @access Private
const updateUser = async(req: Request, res: Response) => {
    res.status(200).json({ message: 'User Update'});
}

// @desc   Get User
// @route  GET /user/login
// @access Private
const deleteUser = async(req: Request, res: Response) => {
    res.status(200).json({ message: 'User Delete'});
}

module.exports = {
    getUser, setUser, updateUser, deleteUser
}