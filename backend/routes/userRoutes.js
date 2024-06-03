import express from "express";
const router = express.Router();
// ES modules in the backend by putting type module in the package json when we use the 
// import syntx and we are importing our own javascript files we have add the extension (.js) or it will cause
// an module not found error
import { 
    authUser, 
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from "../controllers/userController.js";
import { protect } from "../middleware/authmiddleware.js";

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile);

export default router;