$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

function removeRow(id, url) {
    if (confirm('Xóa sẽ không thể khôi phục. Bạn chắc chắn muốn xóa chứ?')) {
        $.ajax({
            type: 'DELETE',
            datatype: 'JSON',
            data: { id },
            url: url,
            success: function(result) {
                if (result.error == false) {
                    alert(result.message);
                    location.reload();
                } else {
                    alert('Xóa không thành công. Vui lòng thử lại')
                }
            }
        })
    }
}


/*upload file*/
$('#upload').change(function() {
    const form = new FormData();
    form.append('file', $(this)[0].files[0]);

    $.ajax({
        processData: false,
        contentType: false,
        type: 'POST',
        dataType: 'JSON',
        data: form,
        url: '/admin/upload/services',
        success: function(results) {
            console.log('URL:', results.url); // Kiểm tra URL trả về

            if (results.error === false) {
                // Cập nhật phần hiển thị ảnh
                $('#image_show').html('<a href="' + results.url + '" target="_blank">' +
                    '<img src="' + results.url + '" width="100px" alt="Preview"></a>');

                // Lưu URL vào input hidden
                $('#thumb').val(results.url);
            } else {
                alert('Lỗi upload: ' + results.message);
            }
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
            alert('Đã xảy ra lỗi khi upload file.');
        }
    });
});