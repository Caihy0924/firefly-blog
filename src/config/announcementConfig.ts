import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题，留空则走i18n默认标题
	title: "",

	// 公告内容
	content: "这是用 Firefly 主题搭的并存版本，用来和主站对比～",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "回主站看看",
		// 链接 URL
		url: "https://caihy0924.github.io",
		// 内部链接
		external: true,
	},
};
