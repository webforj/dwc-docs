import com.basis.dwc.swing.laf.ButtonTheme;
import com.basis.dwc.swing.laf.DwcLookAndFeel;
import java.awt.BorderLayout;
import javax.swing.*;

public class Delivery {
  public static void main(String[] args) {
    SwingUtilities.invokeLater(Delivery::open);
  }

  static void open() {
    try {
      UIManager.setLookAndFeel(new DwcLookAndFeel());
    } catch (UnsupportedLookAndFeelException e) {
      throw new IllegalStateException(e);
    }
    JFrame window = new JFrame("Delivery address");
    window.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
    JTextField email = new JTextField(28);
    JButton save = new JButton("Save");
    JLabel status = new JLabel(" ");

    email.putClientProperty(DwcLookAndFeel.LABEL, "Delivery email");
    email.putClientProperty(DwcLookAndFeel.REQUIRED, true);
    save.putClientProperty(DwcLookAndFeel.THEME, ButtonTheme.PRIMARY);

    save.addActionListener(event -> {
      boolean missing = email.getText().isBlank();
      email.putClientProperty(DwcLookAndFeel.INVALID, missing);
      email.putClientProperty(DwcLookAndFeel.HELPER_TEXT,
          missing ? "Enter a delivery email." : "");
      status.setText(missing ? " " : "Delivery address saved.");
      window.pack();
    });

    JPanel form = new JPanel(new BorderLayout(12, 12));
    form.setBorder(BorderFactory.createEmptyBorder(16, 16, 16, 16));
    JPanel actions = new JPanel(new java.awt.FlowLayout(java.awt.FlowLayout.LEADING, 0, 0));
    actions.add(save);
    form.add(email, BorderLayout.NORTH);
    form.add(actions, BorderLayout.CENTER);
    form.add(status, BorderLayout.SOUTH);
    window.setContentPane(form);
    window.pack();
    window.setLocationByPlatform(true);
    window.setVisible(true);
  }
}
