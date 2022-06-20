/*
 * @Description: 主题
 * @Author: JayShen
 * @Date: 2021-12-26 16:35:56
 * @LastEditors: JayShen
 * @LastEditTime: 2021-12-27 17:26:40
 */
/**
 * 页面刷新时从localStorage加载主题
 */
const initTheme = () => {
  const mode = localStorage.getItem("data-color-mode");
  mode && document.querySelector("html")?.setAttribute("data-color-mode", mode);
};

/**
 * 设置主题
 */
const setTheme = (theme: string) => {
  document.querySelector("html")?.setAttribute("data-color-mode", theme);
  localStorage.setItem("data-color-mode", theme);
};

/**
 * 获取主题
 */
const getTheme = () => {
  const mode = localStorage.getItem("data-color-mode");
  return mode || 'light'
};
export { initTheme, setTheme, getTheme };
