
const weddingCards = [
  {
    number: 1,
    name: "প্রগতি 183",
    image: "images/card-01.jpg",
    price: "18 টাকা/পিস"
  },
  {
    number: 2,
    name: "আপনার কার্ডের নাম ২",
    image: "images/card-02.jpg",
    price: "২০ টাকা/পিস"
  },
  {
    number: 3,
    name: "আপনার কার্ডের নাম ৩",
    image: "images/card-03.jpg",
    price: "২৫ টাকা/পিস"
  },
  {
    number: 4,
    name: "আপনার কার্ডের নাম ৪",
    image: "images/card-04.jpg",
    price: "৩০ টাকা/পিস"
  },
  {
    number: 5,
    name: "আপনার কার্ডের নাম ৫",
    image: "images/card-05.jpg",
    price: "৩৫ টাকা/পিস"
  },
  {
    number: 6,
    name: "আপনার কার্ডের নাম ৬",
    image: "images/card-06.jpg",
    price: "৪০ টাকা/পিস"
  },
  {
    number: 7,
    name: "আপনার কার্ডের নাম ৭",
    image: "images/card-07.jpg",
    price: "৪৫ টাকা/পিস"
  },
  {
    number: 8,
    name: "আপনার কার্ডের নাম ৮",
    image: "images/card-08.jpg",
    price: "৫০ টাকা/পিস"
  },
  {
    number: 9,
    name: "আপনার কার্ডের নাম ৯",
    image: "images/card-09.jpg",
    price: "৫৫ টাকা/পিস"
  },
  {
    number: 10,
    name: "আপনার কার্ডের নাম ১০",
    image: "images/card-10.jpg",
    price: "৬০ টাকা/পিস"
  },
  {
    number: 11,
    name: "আপনার কার্ডের নাম ১১",
    image: "images/card-11.jpg",
    price: "৬৫ টাকা/পিস"
  },
  {
    number: 12,
    name: "আপনার কার্ডের নাম ১২",
    image: "images/card-12.jpg",
    price: "৭০ টাকা/পিস"
  },
  {
    number: 13,
    name: "আপনার কার্ডের নাম ১৩",
    image: "images/card-13.jpg",
    price: "৭৫ টাকা/পিস"
  },
  {
    number: 14,
    name: "আপনার কার্ডের নাম ১৪",
    image: "images/card-14.jpg",
    price: "৮০ টাকা/পিস"
  },
  {
    number: 15,
    name: "আপনার কার্ডের নাম ১৫",
    image: "images/card-15.jpg",
    price: "৮৫ টাকা/পিস"
  }
];
/* Full Image Preview Popup */

document.addEventListener("DOMContentLoaded", function () {
    // Create popup automatically
    const modal = document.createElement("div");
    modal.className = "image-preview-modal";

    modal.innerHTML = `
        <div class="image-preview-content">
            <button
                class="image-preview-close"
                type="button"
                aria-label="Close image preview"
            >&times;</button>

            <img src="" alt="Full image preview">
        </div>
    `;

    document.body.appendChild(modal);

    const previewImage = modal.querySelector(
        ".image-preview-content img"
    );

    const closeButton = modal.querySelector(
        ".image-preview-close"
    );

    // Open full image when a card or its image is clicked
    document.addEventListener("click", function (event) {
        const card = event.target.closest(".wedding-card");

        if (!card) return;

        // Ignore clicks on links or buttons inside the card
        if (event.target.closest("a, button")) return;

        const image = card.querySelector("img");

        if (!image || !image.src) return;

        event.preventDefault();

        previewImage.src = image.src;
        previewImage.alt = image.alt || "Full image preview";

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    // Close popup
    function closePreview() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
        previewImage.src = "";
    }

    closeButton.addEventListener("click", closePreview);

    // Close when clicking the dark background
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closePreview();
        }
    });

    // Close with Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" &&
            modal.classList.contains("active")) {
            closePreview();
        }
    });
});
