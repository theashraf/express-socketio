const env = process.env.NODE_ENV || 'development'
import { merge } from 'lodash'
import defaultConfig from './default'
const envConfig = require(`./${env}`).default

export default merge(defaultConfig, envConfig)
