# ease-modal

An animated modal dialog for **EaseMotion CSS**, built on native `<dialog>` with a blurred backdrop.

## Usage

```html
<dialog class="modal" id="myModal">
  <div class="modal-content">
    <h2>Title</h2>
    <p>Content</p>
    <button onclick="document.getElementById('myModal').close()">Close</button>
  </div>
</dialog>

<button onclick="document.getElementById('myModal').showModal()">Open</button>