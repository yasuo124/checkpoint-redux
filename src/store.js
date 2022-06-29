import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './slices/taskSlice.js'

export default configureStore({reducer:{taskReducer}})