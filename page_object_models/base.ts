import {test as base } from "@playwright/test";

export const test = base.extend<{timeLogger: void}>({
    page: async ({page}, use) => {
        test.info().annotations.push({
            type: 'Start', 
            description: new Date().toLocaleString()
        });
        await use(page);

        test.info().annotations.push({
            type: 'End', 
            description: new Date().toLocaleString()
        });
    },
});