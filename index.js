$('#dashboard-page').hide();

   
    $('#login-form').on('submit', function(e) {
      
        e.preventDefault();// Prevent the default form submission
        $('#login-page').hide();
        $('#dashboard-page').show();
    });

   
    $('#add-club').click(function() {
        $('#add-club-form').toggle();
    });
    
    
    $('#club-form').on('submit', function(e) {
        e.preventDefault();
        
         // Optional: Handle the form submission for adding clubs
        var employee = $('#employee').val();
        var designation = $('#designation').val();
        var level = $('#level').val();
        var domain = $('#domain').val();
        
       // Append new entry to the table
        $('#club-table-body').append(
            `<tr>
                <td>${employee}</td>
                <td>${designation}</td>
                <td>${level}</td>
                <td>${domain}</td>
            </tr>`
        );
        
     
        $('#employee').val('');
        $('#designation').val('');
        $('#level').val('');
        $('#domain').val('');
    
    });