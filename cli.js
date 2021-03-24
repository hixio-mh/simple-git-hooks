#!/usr/bin/env node


/**
 * A CLI tool to change the git hooks to commands from config
 */
const {removeHooks, setHooksFromConfig} = require('./simple-git-hooks')

try {
    removeHooks()
    setHooksFromConfig()
    console.log('[INFO] Successfully set all git hooks')
} catch (e) {
    console.log('[ERROR], Was not able to set git hooks. Error: ' + e)
}
