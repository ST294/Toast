import toast from './toast.vue'
import modal from './modal.vue'

let Toast = {};
let Modal = {};
let currentMsg = null;

function defaultCallBack(action) {
  if (!action) currentMsg.reject()
  currentMsg.resolve()
}

Toast.install = function (Vue) {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  const ToastPlugin = Vue.extend(toast);
  // 生成一个该子类的实例
  const instance = new ToastPlugin();
  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法
  Vue.prototype.$toast = (msg, duration = 1500) => {
    instance.content = msg;
    instance.show = true;

    setTimeout(() => {
      instance.show = false;
    }, duration);
  }
}
Modal.install = function (Vue, options = {}) {
  // 创建模板
  const ModalPlugin = Vue.extend(modal);
  let modals = null

  ModalPlugin.prototype.callBack = defaultCallBack

  Vue.prototype.$modal = (params) => {
    if (!modals) {
      // 创建实例
      modals = new ModalPlugin().$mount()
      // 挂载实例
      document.body.appendChild(modals.$el)
    }
    modals.showModal(params)

    return new Promise((resolve, reject) => {
      currentMsg = {resolve, reject}
    })
  }
}

export {Toast, Modal}
