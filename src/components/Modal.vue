<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" v-click-outside="() => $emit('close')">
          <span class="close" @click="$emit('close')">
            <svg viewBox="0 0 365.696 365.696">
              <path
                d="M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
                fill="#333"
              />
            </svg>
          </span>
          <img
            :src="`https://portal-tb.lynxx.co/api-test/image/${image.id}`"
            :alt="image.name"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  directives: {
    "click-outside": {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== "function") {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
          if (compName) {
            warn += `Found in component '${compName}'`;
          }

          console.warn(warn);
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble;
        const handler = e => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;

        // add Event Listeners
        document.addEventListener("click", handler);
      },

      unbind: function(el) {
        // Remove Event Listeners
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.modal-container {
  position: relative;
  display: flex;
  width: 80%;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }

  img {
    width: 100%;
    height: auto;
  }

  .close {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #333;
    background-color: #fff;

    @media screen and (max-width: 768px) {
      display: none;
    }

    svg {
      width: 20px;
    }
  }
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(0.7);
}
</style>
