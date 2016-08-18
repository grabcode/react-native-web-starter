/**
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 **/


/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('src/index.html', {
        id: "boilder2",
        innerBounds: {
            width: 320,
            height: 480,
            minWidth: 244,
            minHeight: 380
        }
    });
});
