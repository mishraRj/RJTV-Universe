document.addEventListener("DOMContentLoaded", function () {
    const avatarForm = document.getElementById("avatarForm");

    // ✅ Only populate hidden fields if it's for signup
    if (!avatarForm.action.includes("update-avatar")) {
        const username = avatarForm.dataset.username;
        const email = avatarForm.dataset.email;
        const password = avatarForm.dataset.password;

        document.getElementById("usernameInput").value = username;
        document.getElementById("emailInput").value = email;
        document.getElementById("passwordInput").value = password;
    }

    // ✅ Avatar image list
    const avatarImages = [
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096516/2_rgilma_mpopne_wlxzxi.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096516/5_d7gu78_arp9hx_t8dc8y.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096517/9_fcj0jk_achmuc_popxuj.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096517/8_bstziv_vsy8bf_rjia04.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096515/10_wjpyww_ovi6f2_njqlaz.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096516/6_isjbwx_bnewds_dbs1eb.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096517/7_uqi0rz_lvdmex_b0n5tw.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096515/11_qzdopj_otqd3c_dra5ay.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096516/1_axat2x_k40qya_hcm09a.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744435642/newAv_1_nshfh4.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744435642/newAv_2_d6eixi.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744435643/newAv_4_iqad8h.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744435643/newAv_5_uu7vvs.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744435642/newAv_3_iqxvev.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096516/15_eabs54_wjgkvt_c1five.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744389894/girl_2_j0fm0c.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096515/14_s5acki_k0pxli_v9w73k.webp",
        "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096515/12_umnsfe_dcwsx6_n37ffm.webp",
        'https://res.cloudinary.com/dber1ydc9/image/upload/v1744389894/girl_3_y0y78f.webp',
        'https://res.cloudinary.com/dber1ydc9/image/upload/v1744389895/girl_1_uopx2d.webp',
        'https://res.cloudinary.com/dber1ydc9/image/upload/v1744390294/girl_4_1_aiu3cj.webp',
        'https://res.cloudinary.com/dber1ydc9/image/upload/v1744390294/girl_6_1_k7ywgh.webp',
        'https://res.cloudinary.com/dber1ydc9/image/upload/v1744390294/girl_5_1_l4anpe.webp',
    ];

    const avatarContainer = document.querySelector(".avatar-container");

    avatarImages.forEach((src) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-4", "col-md-2");

        const img = document.createElement("img");
        img.src = src;
        img.classList.add("avatar");
        img.alt = "Avatar";
        img.addEventListener("click", function () {
            document.getElementById("selectedAvatar").value = src;
            avatarForm.submit(); // Auto-submit form
        });

        colDiv.appendChild(img);
        avatarContainer.appendChild(colDiv);
    });
});
