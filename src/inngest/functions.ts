import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // 这是一个下载任务
    await step.sleep("download", "30s");

    // 这是一个转换步骤
    await step.sleep("convert", "10s");

    // 这是一个总结任务
    await step.sleep("summarize", "5s");

    return { message: `Hello ${event.data.email}!` };
  },
);